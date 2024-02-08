import {useEffect} from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    useEffect(() => {
        console.log('TIMER SET');
        const timer = setTimeout(() => {
            onConfirm();
        }, TIMER);

         return () => { //executes right before useEffect activates again AND before component dismounts.
            clearTimeout(timer);
        }
    }, [onConfirm]);//will not run another useEffect call because of empty deps.
    //because function is object, it will be recreated after re-rendering corresponding part of the
    //code. Thus another object will be created at every re-render.
    //In that case, there is a risk of creating an infinite loop when using function as dependency.
    //In this particular project there will be no loop because after re-creating modal window dialogue
    //part will be removed, so useEffect will not trigger.

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
        <ProgressBar timer={TIMER} />
    </div>
  );
}
