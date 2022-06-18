import styled from "styled-components";
import { mobile } from "../../responsive";

export const TestimonialsSection = styled.section`
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  padding: 80px 20px;
  ${mobile({ padding: "40px 20px" })}
`;

export const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 36px;
    font-weight: 800;
    color: #333;
    margin: 0 0 12px 0;
    ${mobile({ fontSize: "24px" })}
  }

  p {
    font-size: 16px;
    color: #666;
    margin: 0;
    ${mobile({ fontSize: "14px" })}
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  ${mobile({ gap: "20px" })}
`;

export const TestimonialCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(102, 126, 234, 0.15);
  }

  .stars {
    display: flex;
    gap: 4px;
  }

  .comment {
    color: #666;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
    font-style: italic;
  }

  .authorInfo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .authorDetails {
    flex: 1;
  }

  .authorDetails h4 {
    margin: 0;
    font-size: 14px;
    color: #333;
    font-weight: 600;
  }

  .role {
    margin: 4px 0 0 0;
    font-size: 12px;
    color: #999;
  }

  .verified {
    display: inline-block;
    background: #e8f5e9;
    color: #2e7d32;
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 600;
    margin-top: 4px;
  }
`;
