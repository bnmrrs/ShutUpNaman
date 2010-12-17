require 'haml'
require 'config/init'

get '/' do
  haml :index
end
