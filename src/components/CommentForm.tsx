'use client'
import { useState } from "react";

interface Comment {
  name: string;
  message: string;
  timestamp: Date; // Adicione isso
}

// Componente PAI que gerencia o estado
export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);;

  const addComment = (name: string, message: string) => {
    setComments([...comments, { name, message, timestamp: new Date() }]);
  };

  return (
    <div className="flex justify-center">
      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}

// Componente FILHO 1 - Formulário
export function CommentForm({ onAddComment }: { onAddComment: (name: string, message: string) => void }) {    
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  timestamp: new Date()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      onAddComment(name, message);
      setName("");
      setMessage("");
    }
  };


  return (
    <div className="m-4 justify-center">
      <form
        onSubmit={handleSubmit} 
        className="bg-blue-950 flex flex-col max-w-sm p-4 space-y-3 rounded text-white"
      >

        
        <h2 className="font-bold text-3xl text-amber-200">Faça seu comentário...</h2>
        <label htmlFor="name">Nome</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="insira seu nome" 
          className="border-3 border-orange-800 text-black p-1 bg-amber-100" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
    
        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message" 
          id="message" 
          placeholder="insira sua mensagem" 
          className="border-3 border-orange-800 text-black p-1 bg-amber-100" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          required
        />
    
        <button 
          type="submit" 
          className="cursor-pointer bg-amber-200 text-blue-950 hover:font-bold hover:text-amber-200 hover:bg-transparent transition rounded p-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

// Componente FILHO 2 - Lista de comentários
export function CommentList({ comments }: { comments: Comment[] }) {

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Função para formatar data completa (opcional)
  const formatDateTime = (date: Date) => {
    return date.toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };



  return (
    <div className="m-4 bg-blue-950 flex flex-col max-w-sm p-4 space-y-3 rounded">
        <h2 className="font-bold text-3xl text-amber-200">Lista de comentários</h2>
      {comments.map((comment, index) => (
        <div key={index} className="bg-amber-100 p-3 rounded mb-2">
          <h2 className="text-2xl font-bold italic">{comment.name}</h2>
          <p>{comment.message}</p>
          <p className="text-xs text-gray-500 mt-1">
            Publicado em: {formatDateTime(comment.timestamp)}
          </p>
          {comments.length === 0 && (
        <p className="text-amber-200 text-center">Nenhum comentário ainda.</p>
      )}
        </div>
      ))}
    </div>
  );
}