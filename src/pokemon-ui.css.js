import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  padding: 16px;
  font-family: "Arial", sans-serif;
  background-color: #f0f0f0;
}

h1 {
  display: flex;
  justify-content: center;
  color: #e0dd15;
  font-size: 60px;
  -webkit-text-stroke: 1px black;
  margin-bottom: 16px;
}

.pokemon h1 {
  display: none;
}

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  justify-content: center;
}

.pokemon {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 220px;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.2s ease;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.pokemon:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
  border-color: #007bff;
}

img {
  width: 150px;
  height: auto;
  border-radius: 4px;
}

h3, h4 {
  margin: 8px 0;
  color: #333;
}

button {
  margin: 8px 0;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #074e9b;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;
}

button:hover {
  background-color: #73b0f1;
  transform: translateY(-2px);
}

.collapse-content {
  margin-top: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
`;
