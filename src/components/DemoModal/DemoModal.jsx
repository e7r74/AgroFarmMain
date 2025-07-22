// src/components/DemoModal/DemoModal.jsx (обновленный с CSS Modules)
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa'; // Import a close icon

// Keyframes for the slide-in animation
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
  display: flex;
  justify-content: flex-end; /* Align modal to the right */
  align-items: center;
  z-index: 2000; /* Ensure it's above everything else */
`;

const ModalContent = styled.div`
  background: #fff;
  width: 400px; /* Adjust width as needed */
  max-width: 90%; /* Max width for responsiveness */
  height: 100%; /* Take full height */
  padding: 30px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: ${slideIn} 0.3s ease-out forwards; /* Apply animation */
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.8em;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #f00;
  }
`;

const ModalTitle = styled.h2`
  color: #023f23; /* Dark green */
  margin-bottom: 25px;
  text-align: center;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  &:focus {
    border-color: #27ae60;
    outline: none;
    box-shadow: 0 0 0 2px rgba(39, 174, 96, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  min-height: 100px;
  resize: vertical;
  &:focus {
    border-color: #27ae60;
    outline: none;
    box-shadow: 0 0 0 2px rgba(39, 174, 96, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: #27ae60; /* Green */
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #2ecc71; /* Lighter green on hover */
  }
`;

const DemoModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Demo request submitted!'); // Placeholder for actual submission
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}> {/* Prevent click from closing modal */}
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <ModalTitle>Get a Free Demo</ModalTitle>
        <ModalForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Your Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="company">Company (Optional)</Label>
            <Input type="text" id="company" name="company" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message (Optional)</Label>
            <TextArea id="message" name="message" rows="4"></TextArea>
          </FormGroup>
          <SubmitButton type="submit">Request Demo</SubmitButton>
        </ModalForm>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DemoModal;