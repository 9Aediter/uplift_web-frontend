import Image from 'next/image'
import React from 'react'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/card'
import {
    RocketIcon,
    LightbulbIcon,
    BrainIcon,
    LineChartIcon,
    CompassIcon,
    UsersIcon,
    SparklesIcon,
} from 'lucide-react'
import { Dictionary } from '@/lib/types/dictionary';

// Define IconMap for dynamic icon rendering
const IconMap: Record<string, React.ElementType> = {
    RocketIcon,
    LightbulbIcon,
    BrainIcon,
    CompassIcon,
    UsersIcon,
    SparklesIcon,
};

interface FounderProps {
    dictionary: Dictionary['story']['founder'];
}

export const Founder: React.FC<FounderProps> = ({ dictionary }) => {
    const teamMembers = [
        {
            name: dictionary.members[0].name,
            role: dictionary.members[0].role,
            quote: dictionary.members[0].quote,
            icon: 'RocketIcon',
            skills: dictionary.members[0].skills,
            imageUrl: 'https://randomuser.me/api/portraits/men/70.jpg', // Example image URL
        },
        {
            name: dictionary.members[1].name,
            role: dictionary.members[1].role,
            quote: dictionary.members[1].quote,
            icon: 'BrainIcon',
            skills: dictionary.members[1].skills,
            imageUrl: 'https://randomuser.me/api/portraits/women/71.jpg', // Example image URL
        },
        {
            name: dictionary.members[2].name,
            role: dictionary.members[2].role,
            quote: dictionary.members[2].quote,
            icon: 'LightbulbIcon',
            skills: dictionary.members[2].skills,
            imageUrl: 'https://randomuser.me/api/portraits/women/72.jpg', // Example image URL
        },
    ]
    return (
        <Section className="w-full h-[60vh] flex mx-auto justify-center items-center ">
            <div className="max-w-7xl flex flex-col">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            {dictionary.title}
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {dictionary.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <Card key={index} className="p-10 backdrop-blur-sm">
                            
                            {/* Indentity */}
                            <div className="flex items-center mb-4">
                                {/* Profile Image */}
                                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden border border-gray-600">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Name & Position */}
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold">{member.name}</h3>
                                    <p className="text-cyan-400 text-sm">{member.role}</p>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="mb-4 px-4 py-3 bg-black/50 rounded border border-gray-800">
                                <div className="flex items-center">
                                    {IconMap[member.icon] && React.createElement(IconMap[member.icon], { size: 20, className: "text-cyan-400" })}
                                    <span className="ml-2 text-gray-300 italic">
                                        "{member.quote}"
                                    </span>
                                </div>
                            </div>

                            {/* Skill */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {member.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700"
                                    >
                                        <span className="text-xs">{skill}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Potential */}
                            <div className="mt-4 pt-4 border-t border-gray-800">
                                <div className="flex items-center">
                                    <LineChartIcon size={16} className="text-green-400 mr-2" />
                                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full"
                                            style={{
                                                width: `${75 + index * 5}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    )
}