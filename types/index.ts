
export type CaseDocument = {
  id: string;
  fileName: string;        
  fragmentCount: number;   
  isActive?: boolean;      
};


export type Citation = {
  id: string;       
  documentId: string; 
};

export type Source = {
  fileName: string;
  page: number;
};


export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  citations?: Citation[];  
  sources?: Source[];      
};