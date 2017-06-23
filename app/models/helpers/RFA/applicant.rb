class Helpers::Rfa::Applicant < Helpers::ModelHelperBase

  def model_class
    Rfa::Applicant
  end

  def gender_types
    Rfa::Applicant.gender_types(auth_header)
  end

  def  race_types
    Rfa::Applicant.race_types(auth_header)
  end

  def  education_levels
    Rfa::Applicant.education_levels(auth_header)
  end

  def language_types
    Rfa::Applicant.language_types(auth_header)
  end

end
