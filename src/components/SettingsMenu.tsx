import React, { useState } from 'react';
import { Settings, X, UserPlus, Trash2, User, ChevronRight, Edit2 } from 'lucide-react';
import { ProfileForm } from './ProfileForm';
import type { UserProfile } from '../types/profile';

type SettingsMenuProps = {
  currentProfile: UserProfile | null;
  onSwitchProfile: (profile: UserProfile) => void;
  onDeleteProfile: (profile: UserProfile) => void;
  onResetAll: () => void;
};

export function SettingsMenu({ currentProfile, onSwitchProfile, onDeleteProfile, onResetAll }: SettingsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [editingProfile, setEditingProfile] = useState<UserProfile | null>(null);
  const [profiles, setProfiles] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem('userProfiles');
    return saved ? JSON.parse(saved) : currentProfile ? [currentProfile] : [];
  });
  const defaultProfile: UserProfile = {
    name: '',
    age: 25,
    gender: 'male',
    weight: 70,
    height: 170,
    goal: 'general_fitness',
    experienceLevel: 'beginner',
    measurements: []
  };

  const saveProfiles = (updatedProfiles: UserProfile[]) => {
    localStorage.setItem('userProfiles', JSON.stringify(updatedProfiles));
    setProfiles(updatedProfiles);
  };

  const handleAddProfile = (profile: UserProfile) => {
    const updatedProfiles = [...profiles, profile];
    saveProfiles(updatedProfiles);
    onSwitchProfile(profile);
    setShowProfileForm(false);
  };

  const handleUpdateProfile = (profile: UserProfile) => {
    const updatedProfiles = profiles.map(p => 
      p.name === editingProfile?.name ? profile : p
    );
    saveProfiles(updatedProfiles);
    if (currentProfile?.name === editingProfile?.name) {
      onSwitchProfile(profile);
    }
    setEditingProfile(null);
  };

  const handleDeleteProfile = (profile: UserProfile) => {
    if (window.confirm(`Tem certeza que deseja apagar o perfil de ${profile.name}?`)) {
      const updatedProfiles = profiles.filter(p => p.name !== profile.name);
      saveProfiles(updatedProfiles);
      if (currentProfile?.name === profile.name && updatedProfiles.length > 0) {
        onSwitchProfile(updatedProfiles[0]);
      }
      onDeleteProfile(profile);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <Settings className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-lg overflow-hidden z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Configurações</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="p-4 space-y-4 text-black">
            {showProfileForm ? (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-4">Novo Perfil</h4>
                <ProfileForm
                  profile={defaultProfile}
                  onUpdate={handleAddProfile}
                  onCancel={() => setShowProfileForm(false)}
                  isNew
                />
              </div>
            ) : editingProfile ? (
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-4">Editar Perfil</h4>
                <ProfileForm
                  profile={editingProfile}
                  onUpdate={handleUpdateProfile}
                  onCancel={() => setEditingProfile(null)}
                />
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-500">Perfis</h4>
                  <div className="space-y-2">
                    {profiles.map((profile) => (
                      <div
                        key={profile.name}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-700">{profile.name}</p>
                            <p className="text-sm text-gray-500">
                              {profile.gender === 'male' ? 'Masculino' : 'Feminino'} • {profile.age} anos
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingProfile(profile)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <Edit2 className="w-4 h-4 text-gray-500" />
                          </button>
                          {profiles.length > 1 && (
                            <button
                              onClick={() => handleDeleteProfile(profile)}
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-gray-500" />
                            </button>
                          )}
                          {currentProfile?.name !== profile.name && (
                            <button
                              onClick={() => onSwitchProfile(profile)}
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <ChevronRight className="w-4 h-4 text-gray-500" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowProfileForm(true)}
                  className="flex items-center gap-2 w-full px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Adicionar Perfil</span>
                </button>

                <div className="border-t pt-3">
                  <button
                    onClick={() => {
                      if (window.confirm('Tem certeza que deseja apagar todos os dados? Esta ação não pode ser desfeita.')) {
                        onResetAll();
                        setIsOpen(false);
                      }
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                    <span>Limpar Todos os Dados</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}