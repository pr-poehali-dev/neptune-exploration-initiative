import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Пришла с нулевой подготовкой. Уже через месяц тренировок в Спортклубе 40 почувствовала, как ноги стали сильнее, а одышки нет вообще. Тренеры — огонь!",
    by: "Анна К., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaK&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "До этого думал, что велотренажёр — скучно. В Спортклубе 40 понял, что ошибался. Музыка, темп, тренер — всё заряжает. Хожу три раза в неделю уже полгода.",
    by: "Дмитрий М., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitriyM&backgroundColor=1d4ed8&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Проблемы с коленями не позволяли бегать. Велотренажёр — спасение! В Спортклубе 40 подобрали нагрузку так, что суставы не болят, а кардио улучшается.",
    by: "Светлана П., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SvetlanaP&backgroundColor=1e40af&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Минус 7 кг за два месяца. Диету особо не менял — просто начал регулярно ездить на велотренажёре здесь. Результат говорит сам за себя.",
    by: "Алексей Р., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyR&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Атмосфера в зале — просто кайф. Все друг друга поддерживают, никто не смотрит свысока. Отличное место для тех, кто только начинает.",
    by: "Мария Б., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MariaB&backgroundColor=60a5fa&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Записался по акции на пробное занятие — остался на год. Тренер Николай умеет мотивировать так, что выкладываешься на 100% и при этом хочешь ещё.",
    by: "Игорь С., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IgorS&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Хожу всей семьёй — я, муж и даже дочь-студентка. Тренировки для всех возрастов и уровней. Это наше общее дело теперь.",
    by: "Елена Ф., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaF&backgroundColor=1d4ed8&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Утренние тренировки в 7 утра — теперь мой любимый ритуал. Зарядился — и весь день продуктивный. Советую попробовать каждому.",
    by: "Роман Т., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanT&backgroundColor=1e40af&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Очень чистый зал, современные тренажёры. Видно, что за оборудованием следят. Приятно тренироваться в таких условиях.",
    by: "Наталья В., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NatalyaV&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "После рождения ребёнка нужно было прийти в форму. Велотренажёр идеально — без ударных нагрузок, но эффективно. Спасибо команде Спортклуба 40!",
    by: "Ольга Н., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaN&backgroundColor=60a5fa&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Раньше бросал тренировки через пару недель. В Спортклубе 40 — хожу уже 4 месяца подряд. Атмосфера и тренеры не дают опустить руки.",
    by: "Константин Ш., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KonstantinSh&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Давление нормализовалось, выносливость выросла. Врач сама удивилась и спросила, чем занимаюсь. Говорю — езжу на велотренажёре в Спортклубе 40.",
    by: "Тамара Г., Пермь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TamaraG&backgroundColor=1d4ed8&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-blue-700 text-white border-blue-700"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-blue-300",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        alt={testimonial.by}
        src={testimonial.imgSrc}
        className="mb-4 h-14 w-14 rounded-full object-cover"
      />
      <p className="mb-4 text-base italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
      <p className={cn("text-sm font-medium", isCenter ? "text-blue-200" : "text-gray-500")}>{testimonial.by}</p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(
    testimonials.map((t, i) => ({ ...t, tempId: i - Math.floor(testimonials.length / 2) })),
  )

  const handleMove = (steps: number) => {
    const copy = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const first = copy.shift()
        if (first) copy.push({ ...first, tempId: copy[copy.length - 1].tempId + 1 })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const last = copy.pop()
        if (last) copy.unshift({ ...last, tempId: copy[0].tempId - 1 })
      }
    }
    setTestimonialsList(copy)
  }

  useEffect(() => {
    const updateCardSize = () => {
      if (window.innerWidth < 640) {
        setCardSize(280)
      } else if (window.innerWidth < 1024) {
        setCardSize(320)
      } else {
        setCardSize(365)
      }
    }
    updateCardSize()
    window.addEventListener("resize", updateCardSize)
    return () => window.removeEventListener("resize", updateCardSize)
  }, [])

  const displayPositions = [-2, -1, 0, 1, 2]

  return (
    <div className="relative overflow-hidden" style={{ height: cardSize + 150 }}>
      {displayPositions.map((pos) => {
        const testimonialIndex = testimonialsList.findIndex((t) => t.tempId === pos)
        if (testimonialIndex === -1) return null
        const testimonial = testimonialsList[testimonialIndex]
        return (
          <TestimonialCard
            key={testimonial.tempId}
            position={pos}
            testimonial={testimonial}
            handleMove={handleMove}
            cardSize={cardSize}
          />
        )
      })}

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-4">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300 bg-white text-blue-600 transition-colors hover:bg-blue-50"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300 bg-white text-blue-600 transition-colors hover:bg-blue-50"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
