import React from "react";

export interface ErrorConfig {
    title: string,
    message: string,
    buttonText: string,
}

export function errorForStatus(status: number): ErrorConfig {
    switch (status) {
        case 404:
            return {
                title: "Could not find lesson",
                message:
                    "This lesson does not exist in the OpenTutor system. Please go back and try again, or contact your teacher for help.",
                buttonText: "OK",
            };
        case 403:
            return {
                title: "Nice Try!",
                message:
                    "Did you think we wouldn't know you tried to cheat? We're always watching... always...",
                buttonText: "OK",
            };
        case 410:
            return {
                title: "Lesson session ended",
                message:
                    "We're sorry, but like all good things, this tutoring session has ended. The good news is you can always take it again! Just reload this page.",
                buttonText: "OK",
            };
        default:
            //Unknown Error
            return {
                title: `Server Error (${status})`,
                message:
                    "We don't know what happened. Please try again later or contact a teacher.",
                buttonText: "OK",
            };
    }
}