import Image from "next/image";
import Link from "next/link";
import { Course } from "@/data/courses";
import Card from "@/components/ui/Card";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full group">
      {/* Image */}
      <div className="relative h-48 bg-secondary/30 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {(course.duration || course.level) && (
          <div className="flex gap-4 mb-3">
            {course.duration && (
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                {course.duration}
              </span>
            )}
            {course.level && (
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {course.level}
              </span>
            )}
          </div>
        )}

        <h3
          className="text-xl font-bold text-black mb-2 leading-tight"
          style={{ fontFamily: "var(--font-league-spartan)" }}
        >
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
          {course.shortDescription}
        </p>

        <Link href={`/courses/${course.slug}`} className="btn-secondary text-sm w-fit">
          Ver detalle
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </Card>
  );
}
