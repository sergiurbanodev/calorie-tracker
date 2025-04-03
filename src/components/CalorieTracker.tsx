import { useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};
export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  //Counters
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesConsumed, caloriesBurned]);
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
