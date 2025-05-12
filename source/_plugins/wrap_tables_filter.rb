module Jekyll
  module WrapTablesFilter
    def wrap_tables(input)
      input.gsub(/<table(.*?)>/, '<div class="table-responsive"><table\1>')
           .gsub(/<\/table>/, '</table></div>')
    end
  end
end

Liquid::Template.register_filter(Jekyll::WrapTablesFilter)
