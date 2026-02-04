import styled from "styled-components";
import { mobile } from "../../responsive";

type Props = {
  color: string;
};

export const Container = styled.div`
  display: flex;
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: #e5e7eb;
  padding: 60px 40px;
  gap: 40px;
  ${mobile({ flexDirection: "column", padding: "40px 20px", gap: "30px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Logo = styled.h2`
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

export const Desc = styled.p`
  margin: 0;
  color: #9ca3af;
  line-height: 1.7;
  font-size: 14px;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.div<Props>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobile({ display: "flex" })}
`;

export const Title = styled.h3`
  margin: 0 0 25px 0;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #fff;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.li`
  cursor: pointer;
  color: #9ca3af;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 8px 0;

  &:hover {
    color: #667eea;
    padding-left: 8px;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${mobile({ gap: "15px" })}
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #9ca3af;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    color: #667eea;
    flex-shrink: 0;
    margin-top: 2px;
  }

  &:hover {
    color: #e5e7eb;
  }
`;

export const Payment = styled.img`
  width: 50%;
`;

