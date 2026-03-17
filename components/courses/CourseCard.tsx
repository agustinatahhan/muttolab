import Image from "next/image";
import Link from "next/link";
import { Course } from "@/data/courses";
import Card from "@/components/ui/Card";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full group relative">
      {/* Image */}
      <div className="relative h-48 bg-secondary/30 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {course.category}
          </span>
        </div>

        {/* Cupos limitados */}
        {/* <div className="absolute top-3 right-3">
          <span className="bg-black/70 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
            🗓 Cupos limitados
          </span>
        </div> */}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Format + duration pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {course.format}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"/>
            </svg>
            {course.durationHours}
          </span>
        </div>

        <h3
          className="text-lg font-bold text-black mb-2 leading-snug"
          style={{ fontFamily: "var(--font-league-spartan)" }}
        >
          {course.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
          {course.shortDescription}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/courses/${course.slug}`}
            className="btn-secondary text-xs px-4 py-2.5 w-full justify-center"
          >
            Ver detalle
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </div>
    </Card>
  );
}
