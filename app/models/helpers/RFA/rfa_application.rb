class Helpers::RFA::RfaApplication < Helpers::ModelHelperBase

  def model_class
    RFA::RfaApplication
  end

  def name_types
    RFA::RfaApplication.name_types(auth_header)
  end

  def phone_types
    RFA::RfaApplication.phone_types(auth_header)
  end

end
