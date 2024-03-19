import React from 'react';
import customer from "./pic7.png";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="homecontainer content">
          <div>
            <h1>Welcome to Customer Support Management System</h1>
            <h3 class="no-underline"><center>Strengthen your customer support capabilities</center></h3>
            <p>
              Our system is designed to streamline the process of managing customer
              inquiries, tickets, and support requests. With powerful features such as
              ticket management, user roles, analytics, and more, we aim to provide
              efficient and effective customer support solutions for businesses of all sizes.
              Our dedicated team is committed to delivering high-quality software and
              excellent customer service to help you achieve your support goals.
            </p>
          </div>
        </div>
        <div className="homecontainer image">
          <img src={customer} height="350px" width="550px" alt="project3" />
        </div>
      </div>
      <hr></hr>
      <div className="aboutcontainer content">
        <div className="missioncontent"></div>
        <h1>Our Mission</h1>
        <br></br>
        <p>
          Our mission is simple: To help businesses succeed by providing best-in-class customer support solutions.
          We understand that exceptional customer support is a cornerstone of business success, 
          and we are committed to equipping our clients with the tools and resources they need to deliver outstanding support experiences.
        </p>
      </div>
      <div className="choosecontent">
        <h2>Why choose us</h2>
        <p>
          <ins>Expertise:</ins> Our team of experienced support professionals is dedicated to providing exceptional
          service and delivering positive outcomes for our clients.<br></br>
          <ins>Innovation:</ins> We are committed to innovation and continuous improvement, regularly updating our system 
          with new features and functionalities to meet the evolving needs of our customers.<br></br>
          <ins>Scalability and Flexibility:</ins> Our system is scalable and flexible, capable of 
          supporting businesses of all sizes and adapting to their unique requirements and growth trajectories.<br></br>
          <ins>Customer Centric Approach:</ins> We prioritize the needs and preferences of our customers, 
          striving to deliver personalized support experiences that exceed expectations.<br></br>
        </p>
      </div>
      <hr></hr>
      <h1>Services</h1>
      <div className="servicescontainer">
        <div className="servicescontent"></div>
        <p>We are committed to providing comprehensive support solutions to help businesses 
          deliver exceptional customer experiences.Explore our range of services below:</p>
      </div>
      <div className="keyfeature container">
        <h3>Key Feature</h3>
        <h4>Ticket Management</h4>
        <p>
          This service allows support teams to receive, track, prioritize, and resolve customer inquiries efficiently.<br></br>
          It includes features such as ticket creation, assignment, status tracking, and resolution.
        </p>
      </div>
      <div className="knowledge base">
        <h4>Knowledge Base</h4>
        <p> A knowledge base service provides a centralized repository of articles, FAQs, tutorials, troubleshooting guides, and other self-help resources.
          It enables customers to find answers to common questions and resolve issues independently.</p>
      </div>
      <div className="user authentication">
        <h4>User Authentication</h4>
        <p> Security features such as user authentication, role-based access control (RBAC), and permissions management ensure that sensitive customer data is
          protected and only authorized personnel can access certain features or information.</p>
      </div>
      <div className="knowledge base">
        <h4>Reporting and Analytics</h4>
        <p>Reporting and analytics services provide insights into support team performance, customer satisfaction levels, ticket trends, response times, and other key metrics. 
          These insights help organizations identify areas for improvement and make data-driven decisions.</p>
      </div>
      <div className="customer feedback">
        <h4>Customer Feedback and Satisfaction Surveys</h4> 
        <p>&emsp;Feedback collection tools and satisfaction surveys allow organizations to gather feedback from customers regarding their support experiences. 
          This helps in identifying areas for improvement and measuring customer satisfaction levels.
        </p>
      </div>
      <hr></hr>
      <div className="Contact-container">
        <div className="contactcontent">
          <h1>Contact</h1>
          <p>Have a question or need support? Get in touch with us!</p>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="1"></textarea>
            
            <button type="submit">Submit</button>
          </form>
          <p>&emsp;Or contact us directly:</p>
          <p>&emsp;Email: support@example.com</p>
          <p>&emsp;Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
