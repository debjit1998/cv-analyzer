/*
userdata:
firstname, lastname, about, email, phone, address, skills, 
experience: company, job_title, job_description, start_month (like Jan, Feb, etc), start_year, end_month (like Jan, Feb, etc), end_year, 
education: degree, institution, completion_month, completion_year, cgpa, percentage, 
certifications, 
awards, 
projects: title, description 
*/
import ejs from "ejs";
import fs from "fs";
import path from "path";


export function resumeRenderer(index, userData) {
    const templatePath = path.join(process.cwd(), 'templates', `template${index}.ejs`);
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = ejs.render(template, {user: userData});
    return html;
}