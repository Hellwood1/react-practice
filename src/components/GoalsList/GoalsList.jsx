// import {goals} from '../Data/Data'

export default function GoalsList({ title, description }) {
    
    return (
        <li>
            <p><strong>{title}</strong>
                {description}
            </p>
        </li>
    )
}