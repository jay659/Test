import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



class SimpleForm extends Component {
    render() {
        const theme = {
            background: `#ECF2FF`,
            headerBgColor: '#1A8EFD',
            botBubbleColor: '#1A8EFD',
            botFontColor: '#fff',
            userBubbleColor: '#9D2553',
            userFontColor: '#fff',
        };

        const steps = [
           
            {
                id: '1',
                message: 'What is your name?',
                trigger: 'name',
              },
              {
                id: 'name',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}! What is your gender?',
                trigger: 'gender',
              },
              {
                id: 'gender',
                options: [
                  { value: 'male', label: 'Male', trigger: '5' },
                  { value: 'female', label: 'Female', trigger: '5' },
                ],
              },
              {
                id: '5',
                message: 'How old are you?',
                trigger: 'age',
              },
              {
                id: 'age',
                user: true,
                trigger: '7',
                validator: (value) => {
                  if (isNaN(value)) {
                    return 'value must be a number';
                  } else if (value < 0) {
                    return 'value must be positive';
                  } else if (value > 120) {
                    return `${value}? Come on!`;
                  }
    
                  return true;
                },
              },
              {
                id: '7',
                message: 'Great! Check out your summary',
                trigger: 'update',
              },
           
              {
                id: 'update',
                message: 'Would you like to update some field?',
                trigger: 'update-question',
              },
              {
                id: 'update-question',
                options: [
                  { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                  { value: 'no', label: 'No', trigger: 'end-message' },
                ],
              },
              {
                id: 'update-yes',
                message: 'What field would you like to update?',
                trigger: 'update-fields',
              },
              {
                id: 'update-fields',
                options: [
                  { value: 'name', label: 'Name', trigger: 'update-name' },
                  { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                  { value: 'age', label: 'Age', trigger: 'update-age' },
                ],
              },
              {
                id: 'update-name',
                update: 'name',
                trigger: '7',
              },
              {
                id: 'update-gender',
                update: 'gender',
                trigger: '7',
              },
              {
                id: 'update-age',
                update: 'age',
                trigger: '7',
              },
              {
                id: 'end-message',
                message: 'Thanks! Your data was submitted successfully!',
                end: true,
              },
          
        ];

        return (
            <ThemeProvider theme={theme}>
                <div style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}> {/* Adjust max-width and margin as needed */}
                    <ChatBot
                        steps={steps}
                        
                        placeholder="Make a question..."
                        headerTitle="Health Bot"
                    />
                </div>
            </ThemeProvider>
        );
    }
}

export default SimpleForm;
