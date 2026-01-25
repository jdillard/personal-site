/**
 * Interactive GPX Map with Distance Slider
 *
 * Displays a GPX track on a Leaflet map with a slider to progressively
 * reveal the path from start to finish based on distance.
 */

(function () {
  'use strict';

  const mapContainer = document.getElementById('gpx-map');
  if (!mapContainer) return;

  const gpxUrl = mapContainer.dataset.track;
  if (!gpxUrl) {
    console.error('GPX map: No track URL specified in data-track attribute');
    return;
  }

  // Initialize the map
  const map = L.map('gpx-map', {
    scrollWheelZoom: false
  });

  // OpenTopoMap tiles (good for terrain/ski tracks)
  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://viewfinderpanoramas.org">SRTM</a> | ' +
      'Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> ' +
      '(<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  }).addTo(map);

  // Track data
  let trackCoords = [];
  let cumulativeDistances = [];
  let totalDistance = 0;

  // Polylines
  let ghostTrack = null;
  let visibleTrack = null;

  // Markers
  let startMarker = null;
  let endMarker = null;

  // UI elements
  const slider = document.getElementById('gpx-distance-slider');
  const distanceCurrent = document.getElementById('distance-current');
  const distanceTotal = document.getElementById('distance-total');
  const animateBtn = document.getElementById('gpx-animate-btn');

  // Animation state
  let animationId = null;
  let isAnimating = false;

  /**
   * Calculate distance between two points using Haversine formula
   */
  function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Earth's radius in meters
    const phi1 = lat1 * Math.PI / 180;
    const phi2 = lat2 * Math.PI / 180;
    const deltaPhi = (lat2 - lat1) * Math.PI / 180;
    const deltaLambda = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(phi1) * Math.cos(phi2) *
      Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  /**
   * Calculate cumulative distances for all track points
   */
  function calculateCumulativeDistances(coords) {
    const distances = [0];
    let total = 0;

    for (let i = 1; i < coords.length; i++) {
      const dist = haversineDistance(
        coords[i - 1].lat, coords[i - 1].lng,
        coords[i].lat, coords[i].lng
      );
      total += dist;
      distances.push(total);
    }

    return { distances, total };
  }

  /**
   * Get track points up to a given distance
   */
  function getPointsUpToDistance(targetDistance) {
    if (trackCoords.length < 2) return trackCoords;
    if (targetDistance <= 0) return [trackCoords[0], trackCoords[0]]; // Polyline needs 2+ points
    if (targetDistance >= totalDistance) return trackCoords;

    const points = [];
    for (let i = 0; i < cumulativeDistances.length; i++) {
      if (cumulativeDistances[i] <= targetDistance) {
        points.push(trackCoords[i]);
      } else {
        // Interpolate the final point
        const prevDist = cumulativeDistances[i - 1];
        const currDist = cumulativeDistances[i];
        const ratio = (targetDistance - prevDist) / (currDist - prevDist);

        const prevPoint = trackCoords[i - 1];
        const currPoint = trackCoords[i];

        points.push({
          lat: prevPoint.lat + (currPoint.lat - prevPoint.lat) * ratio,
          lng: prevPoint.lng + (currPoint.lng - prevPoint.lng) * ratio
        });
        break;
      }
    }

    return points;
  }

  /**
   * Update the visible track based on slider value
   */
  function updateTrack(distanceMeters) {
    const points = getPointsUpToDistance(distanceMeters);

    if (visibleTrack) {
      visibleTrack.setLatLngs(points);
    }

    // Update end marker position
    if (endMarker && points.length > 0) {
      const lastPoint = points[points.length - 1];
      endMarker.setLatLng([lastPoint.lat, lastPoint.lng]);
    }

    // Update distance display
    const km = (distanceMeters / 1000).toFixed(1);
    distanceCurrent.textContent = km + ' km';
  }

  /**
   * Handle slider input
   */
  function onSliderInput() {
    const percent = parseFloat(slider.value);
    const distanceMeters = (percent / 100) * totalDistance;
    updateTrack(distanceMeters);
  }

  /**
   * Animate the track from start to finish
   */
  function animateTrack() {
    if (isAnimating) {
      stopAnimation();
      return;
    }

    isAnimating = true;
    animateBtn.textContent = 'Stop';

    const duration = 15000; // 15 seconds
    const startTime = performance.now();
    const startValue = 0;
    const endValue = 100;

    // Reset to start
    slider.value = startValue;
    updateTrack(0);

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-in-out curve
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const value = startValue + (endValue - startValue) * eased;
      slider.value = value;

      const distanceMeters = (value / 100) * totalDistance;
      updateTrack(distanceMeters);

      if (progress < 1) {
        animationId = requestAnimationFrame(step);
      } else {
        stopAnimation();
      }
    }

    animationId = requestAnimationFrame(step);
  }

  /**
   * Stop the animation
   */
  function stopAnimation() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    isAnimating = false;
    animateBtn.textContent = 'Animate Track';
  }

  // Custom marker icons
  const startIcon = L.divIcon({
    className: 'gpx-marker-start',
    html: '<div style="background:#19a974;width:14px;height:14px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  const endIcon = L.divIcon({
    className: 'gpx-marker-end',
    html: '<div style="background:#e7040f;width:14px;height:14px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  /**
   * Recursively flatten nested coordinate arrays and filter valid points
   */
  function flattenCoords(arr, result) {
    if (!Array.isArray(arr)) return;
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (item && typeof item.lat === 'number' && typeof item.lng === 'number') {
        result.push({ lat: item.lat, lng: item.lng });
      } else if (Array.isArray(item)) {
        flattenCoords(item, result);
      }
    }
  }

  // Load GPX using leaflet-gpx plugin (don't add to map, just parse)
  var gpxLayer = new L.GPX(gpxUrl, {
    async: true,
    marker_options: {
      startIconUrl: '',
      endIconUrl: '',
      shadowUrl: ''
    }
  });

  gpxLayer.on('loaded', function (e) {
    const gpx = e.target;

    // Extract coordinates from the GPX layer
    gpx.getLayers().forEach(function (layer) {
      if (layer.getLatLngs) {
        var latlngs = layer.getLatLngs();
        flattenCoords(latlngs, trackCoords);
      }
    });

    if (trackCoords.length === 0) {
      console.error('GPX map: No track coordinates found');
      return;
    }

    // Calculate distances
    const result = calculateCumulativeDistances(trackCoords);
    cumulativeDistances = result.distances;
    totalDistance = result.total;

    // Update total distance display
    const totalKm = (totalDistance / 1000).toFixed(1);
    distanceTotal.textContent = totalKm + ' km';

    // Create ghost track (full track, faded)
    ghostTrack = L.polyline(trackCoords, {
      color: '#666666',
      weight: 4,
      opacity: 0.3
    }).addTo(map);

    // Create visible track (will be updated by slider)
    visibleTrack = L.polyline(trackCoords, {
      color: '#e7040f',
      weight: 4,
      opacity: 0.9
    }).addTo(map);

    // Add start marker
    startMarker = L.marker([trackCoords[0].lat, trackCoords[0].lng], {
      icon: startIcon
    }).addTo(map);

    // Add end marker (initially at end of track)
    const lastPoint = trackCoords[trackCoords.length - 1];
    endMarker = L.marker([lastPoint.lat, lastPoint.lng], {
      icon: endIcon
    }).addTo(map);

    // Fit map to track bounds with padding
    map.fitBounds(ghostTrack.getBounds(), {
      padding: [30, 30]
    });

    // Set slider to 100% (full track visible)
    slider.value = 100;
    distanceCurrent.textContent = totalKm + ' km';

    // Enable slider and button
    slider.disabled = false;
    animateBtn.disabled = false;

    // Attach event listeners
    slider.addEventListener('input', onSliderInput);
    animateBtn.addEventListener('click', animateTrack);

  }).on('error', function (e) {
    console.error('GPX map: Failed to load GPX file', e);
  });

})();
