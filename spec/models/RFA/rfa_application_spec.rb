require 'rspec'
require 'rails_helper'

include RSpec
describe Rfa::RfaApplication do
  it 'builds a default rfa application' do
    rfa_application = FactoryGirl.build(:rfa_application, county: 12)
   expect(rfa_application.county).to eq(12)
  end
end
