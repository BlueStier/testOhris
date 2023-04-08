<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class ConcertUpdateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('id', NumberType::class)
            ->add('daterange', DateType::class, [
                'label' => 'Choisissez une date',
                'attr' => ['id' => 'daterange', 'class' => 'containerForm'],
                'format' => 'dd MM yyyy',
            ])
            ->add('artists', ChoiceType::class, [
                'label' => 'Pour quel artiste ?',
                'choices' => $options['artists'],
                'choice_label' => 'name',
                'attr' => ['class' => 'containerForm'],
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('citys', ChoiceType::class, [
                'label' => 'Pour quelle ville ?',
                'choices' => $options['citys'],
                'choice_label' => 'name',
                'attr' => ['class' => 'containerForm'],
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('goUpdate', SubmitType::class, [
                'label' => 'Enregistrer',
                'attr' => ['class' => 'containerButton']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setRequired(['artists', 'citys']);
    }
}
