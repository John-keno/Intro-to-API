import { Router } from "express";
import {
	getNotes,
	getNotesById,
	createNote,
	deleteNote,
	welcomeMessage,
} from "../controllers/note.controller";

export default function (router: Router) {
	router.get("/", welcomeMessage);
	router.get("/api/notes", getNotes);
	router.get("/api/notes/:id", getNotesById);
	router.post("/api/notes", createNote);
	router.delete("/api/notes/:id", deleteNote);
}
