import styled from "styled-components";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  gap: 20px;
`;

export const Container = styled.div`
  flex: 1;
  margin: 8px;
  min-width: 220px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
    transform: translateY(-8px);
  }

  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 100%);
  position: absolute;
  z-index: 1;
`;

export const Image = styled.img`
  height: 70%;
  z-index: 2;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${Container}:hover & {
    transform: scale(1.05);
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #667eea;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: scale(1.1) rotate(5deg);
  }
`;

