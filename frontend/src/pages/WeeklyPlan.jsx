


function WeeklyPlan() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const examplePlan = {
    Mon: "Pomodoro Pennoni",
    Tue: "番茄肥牛饭",
    Wed: "Overnight Oats",
    Thu: "Mango Yogurt Bites",
    Fri: "番茄炒蛋",
    Sat: "Matcha Latte",
    Sun: "酒酿汤圆"
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Weekly Meal Plan</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {days.map(day => (
          <div key={day} className="p-4 border rounded shadow">
            <strong>{day}</strong>: {examplePlan[day]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyPlan;