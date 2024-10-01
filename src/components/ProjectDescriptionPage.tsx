const ProjectDescriptionPage = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full overflow-y-auto">
      <div className="p-10 flex flex-col items-center justify-center w-fit">
        <h1 className="text-3xl font-medium pb-4">Project Description</h1>
        <div className="w-full flex flex-row justify-start pb-2">
          <h2 className="text-2xl font-medium">Project Goals</h2>
        </div>
        <p className="max-w-prose text-lg pb-8">
          The goal of this project was to train a number of Artificial Neural
          Networks that could predict the closing stock price of companies and
          host these ANNs on the cloud so that others could view the
          predictions. This is meant as an experiment, and IS NOT FINANCIAL
          ADVICE.
        </p>
        <div className="w-full flex flex-row justify-start pb-2">
          <h2 className="text-2xl font-medium">Project Iteration</h2>
        </div>
        <p className="max-w-prose text-lg">
          The original vision of the project was to use Flask, a lightweight web
          framework in Python, to load the models and make predictions. The
          Flask app would be running on an AWS EC2 instance and the models and
          data would be stored in AWS S3. Having a persistant server soon proved
          to be the wrong tool for due to a few reasons. First, getting an instance with
          enough compute for model inference proved to be costly, and second,
          predictions would only need to be made once a day and could be stored
          instead of a prediction being made everytime a user landed on the web
          page.
        </p>
      </div>
    </div>
  );
};

export default ProjectDescriptionPage;
