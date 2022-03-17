import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="h-screen">
    <div className="h-full bg-white dark:bg-slate-900 dark:text-white flex flex-col items-center">
      <section className="flex flex-col py-20 items-center">
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">
          Welcome {user && user.name}
        </h1>
        <p className="font-medium leading-tight text-3xl mb-2 mt-10">
          Goals Dashboard
        </p>
      </section>

      <GoalForm />

      <section className="">
        {goals.length > 0 ? (
          <div className="flex flex-wrap gap-12 py-8 px-4 ">
            {goals.map((goal) => (
              <GoalItem className='py-5' key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </div>
    </div>
  );
}

export default Dashboard;
