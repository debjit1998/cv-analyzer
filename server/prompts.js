export default {
  ANALYZE_RESUME:
    'You will be provided with a resume, and your task is to parse the resume and extract the following information: \
    - if any property mentioned below cannot be inferred, do not remove that property, make it an empty string ("") \
    - role: derive the current role for the user based on the current work experience.\
    - firstname, lastname, role, about, email, phone, address, skills, experience, education, certifications, awards, and projects.\
    - education should be an array of objects with each object containing the following properties { degree, institution, completion_month, completion_year, cgpa, percentage } \
    - experience should be an array of objects with each object containing the following properties { company, job_title, job_description, start_month (like Jan, Feb, etc), start_year, end_month (like Jan, Feb, etc), end_year } \
    - projects should be an array of objects with each object containing the following properties { title, description }, where description will contain details about the project  \
    - skills should be array of strings, generate the skills array by looking at the whole resume (also extract skills from work eperience and projects if possible) \
    - awards shoud be an array of strings, if no awards then return an empty array \
    - certifications should be an array of strings, return an empty array if no certifications are found \
    - also add the following properties (brevity, grammar, ats_score, effectiveness) and rate them on a max score of 100 \
    - also add some highlights (property name: highlights) about this resume that you think are great as an array of strings \
    - also add your improvement suggestions(property name: improvements) as an array of strings \
    - return the data as a plain JSON object having the proerties mentioned above.\
    - analyze and add a properrty resume_score (should be a number and not a string) for the entire resume on a max score of 100\
    - analyze and add a boolean property (invalid) if the provided text is not a valid resume at all, in that case no need to generate any of the other properties mentioned above \
    - no need to add markdown or any other formatting, just plain JSON object.',
  IMPROVE_TEXT:
    "You will be provided with a text, and your task is to improve the text \
    - make it more structured, impactful, and concise",
};
