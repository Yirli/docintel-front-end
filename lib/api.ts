// lib/api.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export interface DocumentUploadResponse {
  id: string;
  filename: string;
  status: string;
}

export interface DocumentMetadata {
  id: string;
  filename: string;
  page_count: number | null;
  status: string;
  uploaded_at: string;
}

export async function uploadDocument(file: File): Promise<DocumentUploadResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/documents/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.detail || "Error al subir el documento");
  }

  return response.json();
}


export async function listDocuments(): Promise<DocumentMetadata[]> {

  const response = await fetch(`${API_BASE_URL}/documents/`, {
    method: "GET"
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.detail || "Error al desplegar lista de documentos");
  }

  return response.json();
}

