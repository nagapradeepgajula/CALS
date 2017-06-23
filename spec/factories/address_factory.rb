FactoryGirl.define do

  factory :address, class: 'Address' do
    sequence(:street) {Faker::Address.street_address}
    sequence(:zip) {Faker::Address.zip}
    sequence(:city) {Faker::Address.city}
    sequence( :state) {Faker::Address.state_abbr}

  #  sequence(:address_type) { ???? } #TODO: whats this
  end
end
