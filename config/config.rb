configure do 
  file_name = File.join(File.dirname(__FILE__), "..", "config", "mongoid.yml")
  @settings = YAML.load(ERB.new(File.new(file_name).read).result)

  Mongoid.configure do |config|
    config.from_hash(@settings[ENV['RACK_ENV']])
  end
end