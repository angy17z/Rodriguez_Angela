let devProfile = {
    fullName: "Angela Rodriguez",
    age: 18,
    profession: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    isEmployed: true,
    contact: {
      email: "angelalujanrodriguez@gmail.com",
      location: "Misiones"
    }
  };
  
  function introduce(profile) {
    return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. I work with ${profile.skills.join(", ")}. I live in ${profile.contact.location}. I am ${profile.age} years old.`;
  }
  
  console.log(introduce(devProfile));