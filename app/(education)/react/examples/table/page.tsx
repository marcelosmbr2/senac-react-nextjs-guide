"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface User {
  id: number;
  nome: string;
  email: string;
  createdAt: string;
}

const users: User[] = [
  { id: 1, nome: "Ana Silva", email: "ana.silva@email.com", createdAt: "2024-01-10" },
  { id: 2, nome: "Bruno Souza", email: "bruno.souza@email.com", createdAt: "2024-02-14" },
  { id: 3, nome: "Carla Mendes", email: "carla.mendes@email.com", createdAt: "2024-03-05" },
  { id: 4, nome: "Diego Oliveira", email: "diego.oliveira@email.com", createdAt: "2024-04-20" },
  { id: 5, nome: "Elisa Costa", email: "elisa.costa@email.com", createdAt: "2024-05-30" },
  { id: 6, nome: "Felipe Rocha", email: "felipe.rocha@email.com", createdAt: "2024-06-18" },
  { id: 7, nome: "Gabriela Lima", email: "gabriela.lima@email.com", createdAt: "2024-07-22" },
];

const PAGE_SIZE = 5;

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / PAGE_SIZE);
  
  const paginatedUsers = users.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div>
      <Table>
        <TableCaption>Lista de usuários cadastrados.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-15">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Criado em</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.nome}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">
                {new Date(user.createdAt).toLocaleDateString("pt-BR")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((p) => Math.max(1, p - 1));
              }}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage((p) => Math.min(totalPages, p + 1));
              }}
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
