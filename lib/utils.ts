import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors] || '#E5E7EB'; // Fallback to gray if color not found
};

export const formatSubjectName = (subject: string) => {
  const subjectMap: { [key: string]: string } = {
    'interview': 'Interview',
    'coding': 'Coding',
    'computersciencefundamentals': 'Computer Science Fundamentals',
    'math': 'Math',
    'science': 'Science',
    'communication': 'Communication',
    'machinelearning': 'Machine Learning',
  };
  
  return subjectMap[subject] || subject.charAt(0).toUpperCase() + subject.slice(1);
};

export const configureAssistant = (voice: string, style: string) => {
  // Safely access voice configuration with fallbacks
  const voiceConfig = voices[voice as keyof typeof voices];
  const voiceId = voiceConfig ? voiceConfig[style as keyof typeof voiceConfig] || "sarah" : "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        "Hello {{userName}} Welcome to congniva I am {{name}} your ai tutor, let's start the session. Today we'll be talking about {{topic}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach the student about the topic and subject.

                    Tutor Guidelines:
                    Stick to the given topic - {{ topic }} and subject - {{ subject }} and teach the student about it.
                    Keep the conversation flowing smoothly while maintaining control.
                    From time to time make sure that the student is following you and understands you.
                    Break down the topic into smaller parts and teach the student one part at a time.
                    Keep your style of conversation {{ style }}.
                    Keep your responses short, like in a real voice conversation.
                    Do not include any special characters in your responses - this is a voice conversation.
              `,
        },
      ],
    },
    clientMessages: [],
    serverMessages: [],
  };
  return vapiAssistant;
};