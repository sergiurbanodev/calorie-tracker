import CalorieDisplay from "./CalorieDisplay";
import { useActivity } from "../hooks/useActivity";

export default function CalorieTracker() {

  const { caloriesConsumed, caloriesBurned, netCalories } = useActivity();
  
  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Calories Review
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5">
        <CalorieDisplay calories={caloriesConsumed} text="Consumed" />
        <CalorieDisplay calories={caloriesBurned} text="Burned" />
        <CalorieDisplay calories={netCalories} text="Diference" />
        
      </div>
    </>
  );
}
