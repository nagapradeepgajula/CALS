require 'rspec'
require 'rails_helper'

include RSpec

describe Rfa::ResidenceController do
  before(:each) do
    allow(controller).to receive_messages(:authenticate_with_cwds => true)
  end

  describe 'post create' do
    it 'makes an a residence' do
      rfa_application =   FactoryGirl.build(:application, id: 1)

      post :create,  params: {a01_id: rfa_application.id}
      expect(response.status).to eq(204)
    end
  end


end
