import styled,{css} from 'styled-components'

const colors = {
    primary: '#4361ee',
    secondary: '#ff0000',
}

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: ${(props) => props.theme.colors[props.variant] || props.theme.colors["primary"] };
    cursor: pointer;

    ${({ full }) =>  full && css `
        display:block;
        width: 100%;
    ` }
`

export default Button
