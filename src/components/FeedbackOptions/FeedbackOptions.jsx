import {Btn} from './FeedbackOptions.styled'

export const Options = ({ options, onLeaveFeedback }) => (
    <div>
      {Object.keys(options).map(option => (
        <Btn key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      ))}
    </div>
  );