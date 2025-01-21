import type { ExperienceItem } from "../types/types";

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
	{
		title: "Muris Salinas Consultores",
		role: "Fullstack Developer",
		time: "January 2024 - Present",
		description:
			"Developed a software to support customs operations, including container tracking, invoice processing (CFDI), and integration with external databases/systems like government platforms and SAT. Improved data processing, storage, and system efficiency. Collaborated on developing features for user roles and internal workflows.",
		techStack: [
			"React",
			"NodeJS",
			"MySQL",
			"Session Auth",
			"Redis (Cache and Queue)",
			"RBAC",
			"CI/CD",
			"AWS",
			"Real Time Data Streaming",
		],
	},
	{
		title: "Agencia Aduanal Tebar y Asociados",
		role: "Freelance Application",
		time: "October 2024",
		description:
			"Developed a client-facing web application for a customs agency. The app streamlines the process of collecting client information and documentation required for customs operations. Clients can submit their general details, select required services, upload product and fiscal documentation, and receive confirmation via email. The system improves efficiency and reduces manual errors in the customs process.",
		techStack: [
			"React",
			"Next.js",
			"MySQL",
			"Cloudflare R2 (AWS SDK)",
			"Email Notifications",
		],
	},

	{
		title: "Aduasis Logistica",
		role: "Junior Developer",
		time: "January 2023 - October 2024",
		description:
			"Modify existing software developed in PowerBuilder to fix errors and optimize efficiency. Add new features, modules and functionalities. Generate detailed reports to document software changes and progress. Store, retrieve, and manipulate data from Microsoft SQL Server database.",
		techStack: ["Powerbuilder", "Microsoft SQL Server"],
	},
	{
		title: "Dos Print Manager",
		role: "Freelance Application",
		time: "February 2024",
		description:
			'Created a comprehensive fullstack application for "Dos Print" to optimize their printer rental service management, covering tracking, billing, inventory, and maintenance.',
		techStack: [
			"Typescript",
			"Prisma",
			"React",
			"NodeJS",
			"Express",
			"MySQL",
			"JWT",
			"Redux",
			"Web Sockets",
			"Cron Jobs",
		],
	},
	{
		title: "Gran Logia de Tamaulipas",
		role: "Freelance Application",
		time: "September 2023",
		description:
			'Fullstack application with +1000 active users across Tamaulipas, for the "Gran Logia de Tamaulipas". You can see more details about the project on the Projects Section.',
		techStack: [
			"Typescript",
			"Prisma",
			"React",
			"NodeJS",
			"Express",
			"MySQL",
			"JWT",
			"Redux",
			"QR Code",
			"Web Sockets",
		],
	},
];
