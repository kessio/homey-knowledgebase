# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

SearchArticle.destroy_all

SearchArticle.create!(
  title: "What services does a real estate agency offer?",
  content: "A real estate agency typically offers services such as property buying and selling, property management, rental services, market analysis, and more."
)

SearchArticle.create!(
  title: "How can I find a reliable real estate agent?",
  content: "To find a reliable real estate agent, consider asking for recommendations, checking online reviews, and interviewing potential agents to understand their experience and approach."
)

SearchArticle.create!(
  title: "What should I look for in a real estate listing?",
  content: "When evaluating a real estate listing, look for details such as property features, location, price, and the agent's contact information. Additionally, review property photos and any available virtual tours."
)

SearchArticle.create!(
  title: "How does your real estate directory service work?",
  content: "Our real estate directory service is an online platform that allows users to search, explore, and discover various real estate listings. It provides detailed information about properties, neighborhoods, and real estate professionals."
)

SearchArticle.create!(
  title: "What types of properties are listed in your directory?",
  content: "Our directory encompasses a wide range of properties, including residential homes, apartments, commercial spaces, and land. We strive to offer a diverse selection to meet the needs of all users."
)

SearchArticle.create!(
  title: "How can I list my property on your real estate directory?",
  content: "To list your property, simply sign up for an account, create a listing, and provide essential details about your property. Our user-friendly interface ensures a seamless and efficient listing process."
)

SearchArticle.create!(
  title: "What features distinguish your real estate directory from others?",
  content: "Our directory stands out with features such as advanced search filters, neighborhood insights, and comprehensive profiles for real estate agents. We prioritize user experience and aim to make the search process intuitive."
)

SearchArticle.create!(
  title: "Can I find information about local real estate professionals on your platform?",
  content: "Yes, our directory includes profiles of experienced real estate agents, brokers, and other professionals. Users can browse these profiles to find the right person to assist them with their real estate needs."
)

SearchArticle.create!(
  title: "How often is the information in your real estate directory updated?",
  content: "We regularly update our database to ensure that property listings, agent profiles, and other information remain accurate and current. Our goal is to provide users with the most reliable information."
)

SearchArticle.create!(
  title: "Are there any fees associated with using your real estate directory?",
  content: "Access to basic features in our directory is typically free. However, certain premium features or services may involve fees. We offer transparent pricing information to users."
)

SearchArticle.create!(
  title: "What criteria should I consider when searching for properties on your platform?",
  content: "Consider factors such as location, property type, budget, and amenities. Our advanced search filters make it easy to tailor your search to specific preferences and requirements."
)

SearchArticle.create!(
  title: "Do you provide information about local amenities and services in addition to property listings?",
  content: "Yes, our directory includes information about nearby schools, hospitals, public transportation, and other amenities. We aim to offer a comprehensive overview of the neighborhoods associated with each listing."
)

SearchArticle.create!(
  title: "How can I contact a real estate agent through your directory?",
  content: "Each agent's profile includes contact information. Users can reach out directly to agents through the provided email address or phone number to inquire about properties or services."
)

SearchArticle.create!(
  title: "Is it possible to save and compare listings on your platform?",
  content: "Yes, our platform allows users to create accounts, save favorite listings, and compare different properties. This feature facilitates a more organized and personalized search experience."
)

SearchArticle.create!(
  title: "What security measures are in place to protect user data on your platform?",
  content: "We prioritize the security of user data and employ encryption and other industry-standard measures to safeguard information. Our privacy policy provides detailed information about data protection practices."
)

SearchArticle.create!(
  title: "Can I receive notifications for new listings that match my preferences?",
  content: "Yes, users can set up notifications based on their criteria. Our platform sends alerts for new listings or changes that align with the specified preferences, ensuring users stay informed."
)

SearchArticle.create!(
  title:"How does your real estate directory handle user reviews and feedback?",
  content: "We encourage users to leave reviews and feedback about their experiences with properties and real estate professionals. This information is valuable for the community and helps maintain transparency."
)
