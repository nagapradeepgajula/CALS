class Helpers::Rfa::ApplicantHouseholdAddress < Helpers::ModelHelperBase

  def model_class
    Rfa::ApplicantHouseholdAddress
  end

  def residence_types
    Rfa::ApplicantHouseholdAddress.residence_types(auth_header)
  end

end
