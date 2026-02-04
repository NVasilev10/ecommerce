import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 70px;
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 999;
  ${mobile({ height: "60px" })}
`;

export const Wrapper = styled.div`
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  ${mobile({ padding: "12px 20px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Language = styled.span`
  font-size: 13px;
  cursor: pointer;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s;
  
  &:hover {
    color: #667eea;
  }
  
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.form`
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  background: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;
  max-width: 350px;
  
  &:focus-within {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  ${mobile({ maxWidth: "150px", padding: "8px 12px" })}
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-size: 14px;
  color: #1f2937;
  
  &::placeholder {
    color: #9ca3af;
  }
  
  ${mobile({ fontSize: "12px" })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: 800;
  font-size: 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.5px;
  
  &:hover {
    opacity: 0.9;
  }
  
  ${mobile({ fontSize: "22px" })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  ${mobile({ justifyContent: "center", flex: 1, gap: "15px" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 8px 12px;
  border-radius: 6px;
  
  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }
  
  ${mobile({ fontSize: "12px", padding: "6px 8px" })}
`;

