require 'haml'
require 'mongoid'
require 'config/config'

get '/' do
  test = 'jamie'
  haml :index, :locals => {:test => test}
end

get '/post/:name' do 
  haml :createpost, :locals => {:name => params[:name]}
end