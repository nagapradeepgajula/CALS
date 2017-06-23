class Helpers::Rfa::RfaApplication < Helpers::ModelHelperBase

  def model_class
    Rfa::RfaApplication
  end

  def name_types
    Rfa::RfaApplication.name_types(auth_header)
  end

  def phone_types
    Rfa::RfaApplication.phone_types(auth_header)
  end

end
