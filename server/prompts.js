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
    - also add some highlights (property name: highlights) about this resume that you think are great as an array of strings \
    - also add your improvement suggestions(property name: improvements) as an array of strings \
    - return the data as a plain JSON object having the proerties mentioned above.\
    - analyze and add a properrty resume_score (should be a number and not a string) for the entire resume on a max score of 100\
    - analyze and add a boolean property (invalid) if the provided text is not a valid resume at all, in that case no need to generate any of the other properties mentioned above \
    - no need to add markdown or any other formatting, just plain JSON object. \
    Following is the schema of the JSON object that you need to return:\
    "{  "role": "STRING",  "firstname": "STRING",  "lastname": "STRING",  "about": "STRING",  "email": "STRING",  "phone": "STRING",  "address": "STRING",  "skills": [    "STRING"  ],  "experience": [    {      "company": "STRING",      "job_title": "STRING",      "job_description": "STRING",      "start_month": "STRING",      "start_year": "STRING",      "end_month": "STRING",      "end_year": "STRING"    }  ],  "education": [    {      "degree": "STRING",      "institution": "STRING",      "completion_month": "STRING",      "completion_year": "STRING",      "cgpa": "STRING",      "percentage": "STRING"    }  ],  "certifications": [    "STRING"  ],  "awards": [    "STRING"  ],  "projects": [    {      "title": "STRING",      "description": "STRING"    }  ],  "highlights": [    "STRING"  ],  "improvements": [    "STRING"  ],  "resume_score": "INTEGER",  "invalid": "BOOLEAN"}"',
  IMPROVE_TEXT:
    "You will be provided with a text, and your task is to improve the text \
    - make it more structured, impactful, and concise",
  CALCULATE_SCORE:
    'I will be providing you with a resume. You need to rate the resume with 4 scores: brevity, grammar, ats_score, and effectiveness. Please follow the following steps to calculate each score:1. Brevity:Step 1: Gauge the Length:Ideal: Aim for one page for most professionals with less than 10 years of experience. Two pages are acceptable for senior roles or those with extensive relevant experience.\
    Too Long: More than two pages often signal a lack of conciseness and can lose the reader\'s attention.\
    Too Short: A significantly short resume (half a page or less) might indicate missing information or lack of relevant experience.\
    Step 2: Analyze Information Density:Skim the Resume: Look for large blocks of text, excessive use of bullet points per job, or lengthy paragraphs.Identify Redundancies: Are there repeated skills, experiences, or phrases that could be consolidated?Question Necessity: Is every piece of information crucial to understanding the candidate\'s qualifications for the target role?\
    Step 3: Evaluate Impact:Clarity: Does the resume get to the point quickly and highlight key achievements?Focus: Is the information presented relevant to the desired job or industry?Readability: Is the resume easy to skim and digest, or does it feel cluttered and overwhelming?\
    Step 4: Calculate brevity score and reasonFollowing the above steps, draw your inferences and calculate a brevity score out of 100. Also, provide a short paragraph within 30 words summarising what can be done better to fix the rating?\
    2. Grammar and Mechanics:Step 1: Conduct a Thorough Proofread:Read Slowly and Carefully: Pay attention to each word, sentence structure, and punctuation mark. It helps to read aloud to catch errors.Focus on Common Errors: Watch for typos, subject-verb agreement, incorrect tenses, misplaced modifiers, and inconsistent capitalization.\
    Step 2: Assess Clarity and Professionalism:Sentence Structure: Are sentences clear, concise, and easy to understand? Avoid overly complex sentences or jargon.Tone and Voice: Does the language sound professional and confident? Avoid slang, clichés, and overly casual phrasing.\
    Consistency: Ensure consistency in formatting, font use, and bullet point style throughout the document.Step 3: Calculate grammar score and reasonFollowing the above steps, draw your inferences and calculate a grammar score out of 100. Also, provide a short paragraph within 30 words summarising what can be done better to fix the rating?\
    3. ATS score Step 1: Understand ATS Functionality:Keyword Matching: ATS software scans resumes for specific keywords related to the job description.Formatting Preferences: ATS systems often have difficulty parsing information from complex formats, tables, or images.\
    Step 2: Utilize ATS-Friendly Practices:Keyword Optimization: Incorporate relevant keywords from the job description throughout your resume, especially in your skills section and work experience descriptions.Simple Formatting: Use a clean and standard resume template with clear headings and sections.Avoid Fancy Formatting: Steer clear of tables, columns, graphics, or unusual fonts that might confuse the ATS.\
    Step 3: Try deriving the relevant keywords from the resume that can be relevant to any job application in the software engineering domain.\
    Step 4: Calculate ATS score and reason:Following the above steps, draw your inferences and calculate a ats_score out of 100. Also, provide a short paragraph within 30 words summarising what can be done better to fix the rating?\
    4. Effectiveness:Step 1: Define the Resume\'s Objective:Target Audience: Who is the intended reader of this resume (recruiters, hiring managers)?Desired Outcome: What impression should the resume make? What action should it prompt? \
    Step 2: Evaluate Content and Structure:Compelling Summary: Does the resume start with a strong summary or profile that highlights key skills and experience?Quantifiable Achievements: Are accomplishments quantified with numbers, percentages, or specific results?Relevant Skills: Does the resume showcase skills that align with the target job description?Logical Flow: Is the information presented in a clear and logical order, making it easy for the reader to follow?\
    Step 3: Assess Overall Impact:First Impression: Does the resume make a positive and memorable first impression?Clarity of Value: Is the candidate\'s value proposition clearly communicated?Call to Action: Does the resume encourage further engagement (e.g., scheduling an interview)?\
    Step 4: Calculate effectiveness score and reason:Following the above steps, draw your inferences and calculate a effectiveness score out of 100. Also, provide a short paragraph within 30 words summarising what can be done better to fix the rating?\
    Please provide the final output as a JSON object. It should contain 4 keys: \'brevity\', \'grammar\', \'ats_score\', and \'effectiveness\'. Each of the keys should be an object containing 2 fields:\'score\': a score calculated out of 100 and \'suggestions\': a paragraph on how the score can be improved. Following is the final output structure:"{"brevity":{"score":"number","suggestions":"string"},"grammar":{"score":"number","suggestions":"string"},"ats_score":{"score":"number","suggestions":"string"},"effectiveness":{"score":"number","suggestions":"string"}}"\
    Always return the ats value as ats_score and not ats as the key name \
    - no need to add markdown or any other formatting, just plain JSON object.',
};
