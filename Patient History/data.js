const patientData = {
    patientId: "12345",
    sessions: [
        {
            sessionId: "sessionId1",
            conversations: [
                { sender: "Doctor", message: "How are you feeling today?" },
                { sender: "Patient", message: "I've been having headaches." }
            ],
            diagnosis: {
                condition: "Migraine",
                date: "2024-10-11",
                notes: "Prescribed medication."
            },
            furtherTests: ["MRI Scan", "Blood Test"],
            medications: ["Ibuprofen", "Sumatriptan"]
        },
        {
            sessionId: "sessionId2",
            conversations: [
                { sender: "Doctor", message: "Any improvements since last time?" },
                { sender: "Patient", message: "Yes, but still occasional headaches." }
            ],
            diagnosis: {
                condition: "Chronic Migraine",
                date: "2024-10-18",
                notes: "Changed medication."
            },
            furtherTests: ["CT Scan"],
            medications: ["Amitriptyline", "Propranolol"]
        }
    ]
};
