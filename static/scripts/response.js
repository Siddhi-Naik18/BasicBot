function getBotResponse(input) {
    if (input == "hello") {
        return "Hello there 👋!";
    }
    else if (input == "hi" || input == "hiee") {
        return "Hi there 👋!";
    }
    else if (input == "Heart clicked!") {
        return "Thank You ❤️"
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "what is your name?") {
        return "I'm Alan";
    }
    else if (input == "No issues") {
        return "Great!";
    }
    else if (input == "how are you?") {
        return "I'm good, how can I help you?";
    }
    else if (input == "how are you doing?") {
        return "I'm good, how can I help you?";
    }
    else if (input == "How are you going?") {
        return "I'm good, how can I help you?";
    }
    else if (input == "Who are you?") {
        return "I'm a chatbot named Alan. I try to answer some of your questions. Sometimes I get them right.Sometimes I need additional help. How can I help you?";
    }
    else if (input == "What do you really do?") {
        return "I'm a chatbot named Alan. I try to answer some of your questions. Sometimes I get them right.Sometimes I need additional help. How can I help you?";
    }
    else if (input == "I have a question") {
        return "Sure, ask it away!";
    }
    else if (input == "can you help me?") {
        return "Sure, ask it away!";
    }
    else if (input == "Are you human?") {
        return "I'm a chatbot designed to recommend courses and assist with educational queries. While I'm not a human, I'm here to provide helpful and accurate information based on the data I've been trained on. How can I assist you further today?";
    }
    else if (input == "Are you a robot?") {
        return "I'm a chatbot designed to recommend courses and assist with educational queries. I'm here to provide helpful and accurate information based on the data I've been trained on. How can I assist you further today?";
    }
    else if (input == "Can you recommend a beginner-level course in Python programming?") {
        return "Sure, I recommend 'Python for Beginners' by Coursera. You can find the course here https://www.coursera.org/learn/python-for-beginners..ai/"
    }
    else if (input == "I want to learn about machine learning. Any suggestions for an intermediate course?") {
        return "Check out 'Machine Learning A-Z™: Hands-On Python & R In Data Science' on Udemy. It covers a wide range of ML topics. Here's the link (https://www.udemy.com/course/machinelearning/)."
    }
    else if (input == "What's a good resource for learning web development with JavaScript?") {
        return "'The Complete JavaScript Course 2022: From Zero to Expert!' on Udemy is highly recommended. Here's the link (https://www.udemy.com/course/the-complete-javascript-course/)."
    }
    else if (input == "Can you suggest an advanced course in data analytics using R?") {
        return "'The Complete JavaScript Course 2022: From Zero to Expert!' on Udemy is highly recommended. Here's the link (https://www.udemy.com/course/the-complete-javascript-course/)."
    }
    else if (input == "I'm interested in graphic design. What's a good online course for beginners?") {
        return "'Graphic Design Masterclass - Learn GREAT Design' on Udemy is popular among beginners. You can enroll here (https://www.udemy.com/course/graphic-design-masterclass/)."
    }
    else {
        return "Try asking something else!";
    }
}