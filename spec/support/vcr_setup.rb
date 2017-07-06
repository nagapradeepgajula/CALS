require 'vcr'
require 'webmock/rspec'

VCR.configure do |c|
  c.cassette_library_dir = 'spec/cassettes'
  c.hook_into :webmock, :faraday
  c.allow_http_connections_when_no_cassette = true
  c.ignore_localhost = false
  c.ignore_request do |request|
  !(request.uri.starts_with?(CALS_API_BASE_URL) || request.uri.starts_with?(CALS_API_URL))
  end
end
