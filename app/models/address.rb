class Address < CalsBase
  include Concerns::AddressApiProtocolProvider

  attr_accessor :street_address, :zip, :city, :state, :type
end
