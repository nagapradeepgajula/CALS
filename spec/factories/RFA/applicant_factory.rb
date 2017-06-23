FactoryGirl.define do
factory :applicant, class: 'RFA::Applicant' do
   #sequence(:language)  #TODO: what to put here
  #  sequence(:education_level)  #TODO: what to put here
    sequence(:date_of_birth) {Faker::Date.birthday}
  #  sequence(:race) #TODO: what to put here
  #  sequence( :gender) #TODO: what to put here
    sequence(:dl_number) {Faker::Number.number(6)}
    sequence(:dl_state)  {Faker::Address.state_abbr}
    sequence(:email_address)  {Faker::Internet.email}
    #sequence(:exclusion_order) #TODO: what to put here
    sequence(:legal_first) {Faker::Name.first_name}
    sequence(:legal_middle) {Faker::Name.first_name}
    sequence(:legal_last) {Faker::Name.last_name}


  # has_one :occupation
  # has_one :desired_child
  # has_one :identified_desired_child
  #
  # has_many :licenses
  # has_many :phones
  # has_many :applicant_children
  # has_many :household_adults
  # has_many :relationships
  # has_many :alternative_names
end
end
